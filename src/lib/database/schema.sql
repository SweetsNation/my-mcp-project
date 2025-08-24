-- Medicare Advantage Database Schema
-- Production-ready schema for storing Medicare plan data

-- Create extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table for insurance carriers
CREATE TABLE carriers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    website VARCHAR(500),
    phone VARCHAR(20),
    am_best_rating VARCHAR(10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for Medicare plan types
CREATE TABLE plan_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(20) NOT NULL UNIQUE, -- HMO, PPO, HMO-POS, PFFS
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Table for geographic locations
CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    zip_code VARCHAR(10) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    county VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    population INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(zip_code, city, state)
);

-- Table for Medicare Advantage plans
CREATE TABLE medicare_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    carrier_id UUID NOT NULL REFERENCES carriers(id) ON DELETE CASCADE,
    plan_type_id UUID NOT NULL REFERENCES plan_types(id) ON DELETE CASCADE,
    
    -- Basic plan information
    plan_id VARCHAR(50) NOT NULL, -- CMS Plan ID
    name VARCHAR(255) NOT NULL,
    plan_year INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, pending
    
    -- Cost information
    premium DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    deductible DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    max_out_of_pocket DECIMAL(8,2) NOT NULL,
    
    -- Copays and coinsurance
    doctor_copay DECIMAL(6,2) DEFAULT 0.00,
    specialist_copay DECIMAL(6,2) DEFAULT 0.00,
    hospital_copay DECIMAL(6,2) DEFAULT 0.00,
    urgent_care_copay DECIMAL(6,2) DEFAULT 0.00,
    emergency_room_copay DECIMAL(6,2) DEFAULT 0.00,
    
    -- Star rating
    star_rating DECIMAL(2,1) CHECK (star_rating >= 1.0 AND star_rating <= 5.0),
    
    -- Benefits flags
    includes_part_d BOOLEAN DEFAULT TRUE,
    dental_coverage BOOLEAN DEFAULT FALSE,
    dental_limit DECIMAL(8,2) DEFAULT 0.00,
    vision_coverage BOOLEAN DEFAULT FALSE,
    vision_limit DECIMAL(8,2) DEFAULT 0.00,
    hearing_coverage BOOLEAN DEFAULT FALSE,
    hearing_limit DECIMAL(8,2) DEFAULT 0.00,
    fitness_benefits BOOLEAN DEFAULT FALSE,
    transportation BOOLEAN DEFAULT FALSE,
    otc_benefits BOOLEAN DEFAULT FALSE,
    otc_limit DECIMAL(6,2) DEFAULT 0.00,
    
    -- Additional benefits JSON
    additional_benefits JSONB DEFAULT '{}',
    
    -- Network information
    network_size VARCHAR(20), -- small, medium, large
    requires_referrals BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(plan_id, plan_year)
);

-- Junction table for plan availability in locations
CREATE TABLE plan_locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID NOT NULL REFERENCES medicare_plans(id) ON DELETE CASCADE,
    location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(plan_id, location_id)
);

-- Table for prescription drug formularies
CREATE TABLE formularies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID NOT NULL REFERENCES medicare_plans(id) ON DELETE CASCADE,
    drug_name VARCHAR(255) NOT NULL,
    generic_name VARCHAR(255),
    tier INTEGER NOT NULL CHECK (tier >= 1 AND tier <= 6),
    copay_amount DECIMAL(6,2),
    coinsurance_percentage DECIMAL(5,2),
    prior_authorization BOOLEAN DEFAULT FALSE,
    step_therapy BOOLEAN DEFAULT FALSE,
    quantity_limits VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for provider networks
CREATE TABLE providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    npi VARCHAR(20) UNIQUE, -- National Provider Identifier
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(100),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    phone VARCHAR(20),
    accepting_new_patients BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Junction table for plan provider networks
CREATE TABLE plan_providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID NOT NULL REFERENCES medicare_plans(id) ON DELETE CASCADE,
    provider_id UUID NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
    network_tier VARCHAR(20) DEFAULT 'in-network', -- in-network, out-of-network
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(plan_id, provider_id)
);

-- Table for user plan comparisons and favorites
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id VARCHAR(255) NOT NULL,
    zip_code VARCHAR(10),
    preferences JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '7 days'
);

-- Table for tracking plan comparisons
CREATE TABLE plan_comparisons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(id) ON DELETE CASCADE,
    plan_ids UUID[] NOT NULL,
    comparison_data JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for lead generation
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20),
    zip_code VARCHAR(10),
    age INTEGER,
    interested_plans UUID[],
    contact_preferences JSONB DEFAULT '{}',
    source VARCHAR(100), -- website, phone, referral, etc.
    status VARCHAR(20) DEFAULT 'new', -- new, contacted, qualified, closed
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_medicare_plans_carrier ON medicare_plans(carrier_id);
CREATE INDEX idx_medicare_plans_type ON medicare_plans(plan_type_id);
CREATE INDEX idx_medicare_plans_year ON medicare_plans(plan_year);
CREATE INDEX idx_medicare_plans_premium ON medicare_plans(premium);
CREATE INDEX idx_medicare_plans_rating ON medicare_plans(star_rating);
CREATE INDEX idx_medicare_plans_benefits ON medicare_plans(dental_coverage, vision_coverage, hearing_coverage);

CREATE INDEX idx_plan_locations_plan ON plan_locations(plan_id);
CREATE INDEX idx_plan_locations_location ON plan_locations(location_id);

CREATE INDEX idx_locations_zip ON locations(zip_code);
CREATE INDEX idx_locations_city_state ON locations(city, state);

CREATE INDEX idx_formularies_plan ON formularies(plan_id);
CREATE INDEX idx_formularies_drug ON formularies(drug_name);

CREATE INDEX idx_providers_npi ON providers(npi);
CREATE INDEX idx_providers_location ON providers(city, state, zip_code);

CREATE INDEX idx_plan_providers_plan ON plan_providers(plan_id);
CREATE INDEX idx_plan_providers_provider ON plan_providers(provider_id);

CREATE INDEX idx_user_sessions_session ON user_sessions(session_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_zip ON leads(zip_code);

-- Insert initial data
INSERT INTO plan_types (code, name, description) VALUES
    ('HMO', 'Health Maintenance Organization', 'Requires referrals and in-network care'),
    ('PPO', 'Preferred Provider Organization', 'More flexibility to see out-of-network providers'),
    ('HMO-POS', 'HMO Point-of-Service', 'HMO with some out-of-network coverage'),
    ('PFFS', 'Private Fee-for-Service', 'Plan determines how much to pay providers');

INSERT INTO carriers (name, website, phone) VALUES
    ('UnitedHealthcare', 'https://www.uhc.com', '1-800-MEDICARE'),
    ('Humana', 'https://www.humana.com', '1-800-HUMANA1'),
    ('Kaiser Permanente', 'https://healthy.kaiserpermanente.org', '1-800-464-4000'),
    ('Anthem', 'https://www.anthem.com', '1-800-ANTHEM1'),
    ('Aetna', 'https://www.aetna.com', '1-800-US-AETNA');

-- Sample locations
INSERT INTO locations (zip_code, city, state, county, latitude, longitude) VALUES
    ('10001', 'New York', 'NY', 'New York County', 40.7505, -73.9934),
    ('90210', 'Beverly Hills', 'CA', 'Los Angeles County', 34.0901, -118.4065),
    ('33101', 'Miami', 'FL', 'Miami-Dade County', 25.7753, -80.2089),
    ('30309', 'Atlanta', 'GA', 'Fulton County', 33.7901, -84.3764),
    ('94102', 'San Francisco', 'CA', 'San Francisco County', 37.7849, -122.4094);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_medicare_plans_updated_at 
    BEFORE UPDATE ON medicare_plans 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();