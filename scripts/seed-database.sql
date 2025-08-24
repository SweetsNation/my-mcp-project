-- Database Seeding Script for El-Mag Insurance Medicare Advantage Platform
-- This script populates the database with sample Medicare Advantage plan data

-- Insert additional carriers
INSERT INTO carriers (name, website, phone, am_best_rating) VALUES
    ('Blue Cross Blue Shield', 'https://www.bcbs.com', '1-800-BLUE-4U', 'A+'),
    ('Cigna', 'https://www.cigna.com', '1-800-CIGNA-24', 'A'),
    ('WellCare', 'https://www.wellcare.com', '1-800-237-0909', 'A-'),
    ('Molina Healthcare', 'https://www.molinahealthcare.com', '1-800-526-8196', 'A-'),
    ('Centene Corporation', 'https://www.centene.com', '1-800-225-2573', 'A');

-- Insert additional locations
INSERT INTO locations (zip_code, city, state, county, latitude, longitude, population) VALUES
    ('60601', 'Chicago', 'IL', 'Cook County', 41.8781, -87.6298, 2700000),
    ('77001', 'Houston', 'TX', 'Harris County', 29.7604, -95.3698, 2300000),
    ('85001', 'Phoenix', 'AZ', 'Maricopa County', 33.4484, -112.0740, 1600000),
    ('19101', 'Philadelphia', 'PA', 'Philadelphia County', 39.9526, -75.1652, 1600000),
    ('92101', 'San Diego', 'CA', 'San Diego County', 32.7157, -117.1611, 1400000),
    ('33101', 'Miami', 'FL', 'Miami-Dade County', 25.7753, -80.2089, 2700000),
    ('30309', 'Atlanta', 'GA', 'Fulton County', 33.7901, -84.3764, 500000),
    ('94102', 'San Francisco', 'CA', 'San Francisco County', 37.7849, -122.4094, 870000),
    ('10001', 'New York', 'NY', 'New York County', 40.7505, -73.9934, 8400000),
    ('90210', 'Beverly Hills', 'CA', 'Los Angeles County', 34.0901, -118.4065, 10000000);

-- Insert sample Medicare Advantage plans
INSERT INTO medicare_plans (
    carrier_id, plan_type_id, plan_id, name, plan_year, status,
    premium, deductible, max_out_of_pocket,
    doctor_copay, specialist_copay, hospital_copay, urgent_care_copay, emergency_room_copay,
    star_rating, dental_coverage, dental_limit, vision_coverage, vision_limit,
    hearing_coverage, hearing_limit, fitness_benefits, transportation, otc_benefits, otc_limit,
    network_size, requires_referrals, additional_benefits
) VALUES
    -- UnitedHealthcare Plans
    ((SELECT id FROM carriers WHERE name = 'UnitedHealthcare'), 
     (SELECT id FROM plan_types WHERE code = 'HMO'), 
     'H1036-001', 'AARP Medicare Advantage Choice (PPO)', 2025, 'active',
     0.00, 0.00, 6700.00, 20.00, 40.00, 350.00, 25.00, 90.00,
     4.2, true, 1500.00, true, 200.00, true, 1000.00, true, true, true, 100.00,
     'large', false, '{"meal_delivery": true, "home_safety": true}'),
    
    ((SELECT id FROM carriers WHERE name = 'UnitedHealthcare'), 
     (SELECT id FROM plan_types WHERE code = 'PPO'), 
     'H1036-002', 'AARP Medicare Advantage Choice (PPO) Plus', 2025, 'active',
     25.00, 0.00, 5500.00, 15.00, 30.00, 250.00, 20.00, 75.00,
     4.5, true, 2000.00, true, 300.00, true, 1500.00, true, true, true, 150.00,
     'large', false, '{"meal_delivery": true, "home_safety": true, "caregiver_support": true}'),
    
    -- Humana Plans
    ((SELECT id FROM carriers WHERE name = 'Humana'), 
     (SELECT id FROM plan_types WHERE code = 'HMO'), 
     'H5216-001', 'HumanaChoice H5216-001 (PPO)', 2025, 'active',
     0.00, 0.00, 7200.00, 25.00, 45.00, 400.00, 30.00, 100.00,
     4.0, true, 1200.00, true, 150.00, true, 800.00, true, false, true, 80.00,
     'medium', true, '{"gym_membership": true}'),
    
    ((SELECT id FROM carriers WHERE name = 'Humana'), 
     (SELECT id FROM plan_types WHERE code = 'PPO'), 
     'H5216-002', 'HumanaChoice H5216-002 (PPO) Gold Plus', 2025, 'active',
     45.00, 0.00, 4800.00, 10.00, 20.00, 200.00, 15.00, 60.00,
     4.3, true, 1800.00, true, 250.00, true, 1200.00, true, true, true, 120.00,
     'large', false, '{"gym_membership": true, "meal_delivery": true}'),
    
    -- Kaiser Permanente Plans
    ((SELECT id FROM carriers WHERE name = 'Kaiser Permanente'), 
     (SELECT id FROM plan_types WHERE code = 'HMO'), 
     'H0521-001', 'Kaiser Permanente Senior Advantage (HMO)', 2025, 'active',
     0.00, 0.00, 6500.00, 15.00, 15.00, 300.00, 20.00, 85.00,
     4.8, true, 1600.00, true, 180.00, true, 900.00, true, false, true, 90.00,
     'medium', true, '{"integrated_care": true, "electronic_records": true}'),
    
    -- Blue Cross Blue Shield Plans
    ((SELECT id FROM carriers WHERE name = 'Blue Cross Blue Shield'), 
     (SELECT id FROM plan_types WHERE code = 'PPO'), 
     'H1036-003', 'Blue Cross Blue Shield Medicare Advantage (PPO)', 2025, 'active',
     35.00, 0.00, 6000.00, 20.00, 35.00, 350.00, 25.00, 90.00,
     4.1, true, 1400.00, true, 200.00, true, 1000.00, true, true, true, 110.00,
     'large', false, '{"telehealth": true, "care_coordination": true}'),
    
    -- Cigna Plans
    ((SELECT id FROM carriers WHERE name = 'Cigna'), 
     (SELECT id FROM plan_types WHERE code = 'HMO'), 
     'H1036-004', 'Cigna Medicare Advantage (HMO)', 2025, 'active',
     0.00, 0.00, 6800.00, 25.00, 40.00, 375.00, 30.00, 95.00,
     3.9, true, 1100.00, true, 160.00, true, 750.00, true, false, true, 85.00,
     'medium', true, '{"pharmacy_benefits": true}'),
    
    -- WellCare Plans
    ((SELECT id FROM carriers WHERE name = 'WellCare'), 
     (SELECT id FROM plan_types WHERE code = 'HMO'), 
     'H1036-005', 'WellCare Medicare Advantage (HMO)', 2025, 'active',
     0.00, 0.00, 7000.00, 30.00, 50.00, 400.00, 35.00, 100.00,
     3.7, true, 1000.00, true, 140.00, true, 600.00, true, false, true, 75.00,
     'small', true, '{"care_management": true}');

-- Link plans to locations (sample data)
INSERT INTO plan_locations (plan_id, location_id)
SELECT 
    mp.id as plan_id,
    l.id as location_id
FROM medicare_plans mp
CROSS JOIN locations l
WHERE l.state IN ('CA', 'NY', 'FL', 'TX', 'IL', 'GA', 'PA', 'AZ')
LIMIT 50;

-- Insert sample providers
INSERT INTO providers (npi, name, specialty, address_line1, city, state, zip_code, phone) VALUES
    ('1234567890', 'Dr. Sarah Johnson', 'Primary Care', '123 Main St', 'New York', 'NY', '10001', '212-555-0101'),
    ('1234567891', 'Dr. Michael Chen', 'Cardiology', '456 Oak Ave', 'Los Angeles', 'CA', '90210', '310-555-0202'),
    ('1234567892', 'Dr. Emily Rodriguez', 'Dermatology', '789 Pine St', 'Miami', 'FL', '33101', '305-555-0303'),
    ('1234567893', 'Dr. David Thompson', 'Orthopedics', '321 Elm St', 'Chicago', 'IL', '60601', '312-555-0404'),
    ('1234567894', 'Dr. Lisa Wang', 'Neurology', '654 Maple Dr', 'Houston', 'TX', '77001', '713-555-0505'),
    ('1234567895', 'Dr. Robert Garcia', 'Oncology', '987 Cedar Ln', 'Phoenix', 'AZ', '85001', '602-555-0606'),
    ('1234567896', 'Dr. Jennifer Lee', 'Endocrinology', '147 Birch Rd', 'Philadelphia', 'PA', '19101', '215-555-0707'),
    ('1234567897', 'Dr. Christopher Brown', 'Gastroenterology', '258 Spruce Way', 'San Diego', 'CA', '92101', '619-555-0808'),
    ('1234567898', 'Dr. Amanda Davis', 'Rheumatology', '369 Willow Ct', 'Atlanta', 'GA', '30309', '404-555-0909'),
    ('1234567899', 'Dr. Kevin Wilson', 'Pulmonology', '741 Aspen Pl', 'San Francisco', 'CA', '94102', '415-555-1010');

-- Link providers to plans (sample data)
INSERT INTO plan_providers (plan_id, provider_id, network_tier)
SELECT 
    mp.id as plan_id,
    p.id as provider_id,
    CASE WHEN random() > 0.3 THEN 'in-network' ELSE 'out-of-network' END as network_tier
FROM medicare_plans mp
CROSS JOIN providers p
WHERE random() > 0.5
LIMIT 100;

-- Insert sample formularies
INSERT INTO formularies (plan_id, drug_name, generic_name, tier, copay_amount, coinsurance_percentage, prior_authorization, step_therapy) VALUES
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H1036-001'), 'Lipitor', 'Atorvastatin', 2, 10.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H1036-001'), 'Metformin', 'Metformin', 1, 5.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H1036-001'), 'Lisinopril', 'Lisinopril', 1, 5.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H1036-002'), 'Lipitor', 'Atorvastatin', 2, 8.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H1036-002'), 'Metformin', 'Metformin', 1, 3.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H5216-001'), 'Lipitor', 'Atorvastatin', 3, 15.00, NULL, true, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H5216-001'), 'Metformin', 'Metformin', 1, 5.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H0521-001'), 'Lipitor', 'Atorvastatin', 2, 10.00, NULL, false, false),
    ((SELECT id FROM medicare_plans WHERE plan_id = 'H0521-001'), 'Metformin', 'Metformin', 1, 5.00, NULL, false, false);

-- Insert sample leads
INSERT INTO leads (first_name, last_name, email, phone, zip_code, age, source, status, notes) VALUES
    ('John', 'Smith', 'john.smith@email.com', '555-0101', '10001', 67, 'website', 'new', 'Interested in dental coverage'),
    ('Mary', 'Johnson', 'mary.johnson@email.com', '555-0102', '90210', 72, 'phone', 'contacted', 'Looking for $0 premium plans'),
    ('Robert', 'Williams', 'robert.williams@email.com', '555-0103', '33101', 69, 'website', 'qualified', 'Wants vision and hearing benefits'),
    ('Patricia', 'Brown', 'patricia.brown@email.com', '555-0104', '60601', 75, 'referral', 'new', 'Interested in fitness benefits'),
    ('Michael', 'Jones', 'michael.jones@email.com', '555-0105', '77001', 68, 'website', 'contacted', 'Comparing HMO vs PPO plans');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_medicare_plans_carrier_year ON medicare_plans(carrier_id, plan_year);
CREATE INDEX IF NOT EXISTS idx_medicare_plans_premium_rating ON medicare_plans(premium, star_rating);
CREATE INDEX IF NOT EXISTS idx_plan_locations_zip ON plan_locations USING btree (location_id);
CREATE INDEX IF NOT EXISTS idx_formularies_drug_tier ON formularies(drug_name, tier);
CREATE INDEX IF NOT EXISTS idx_leads_source_status ON leads(source, status);

-- Create a view for plan summaries
CREATE OR REPLACE VIEW plan_summaries AS
SELECT 
    mp.id,
    mp.plan_id,
    mp.name as plan_name,
    c.name as carrier_name,
    pt.name as plan_type,
    mp.plan_year,
    mp.premium,
    mp.deductible,
    mp.max_out_of_pocket,
    mp.star_rating,
    mp.dental_coverage,
    mp.vision_coverage,
    mp.hearing_coverage,
    mp.fitness_benefits,
    mp.transportation,
    mp.otc_benefits,
    mp.network_size,
    mp.requires_referrals,
    COUNT(DISTINCT pl.location_id) as available_locations,
    COUNT(DISTINCT pp.provider_id) as network_providers
FROM medicare_plans mp
JOIN carriers c ON mp.carrier_id = c.id
JOIN plan_types pt ON mp.plan_type_id = pt.id
LEFT JOIN plan_locations pl ON mp.id = pl.plan_id
LEFT JOIN plan_providers pp ON mp.id = pp.plan_id AND pp.network_tier = 'in-network'
WHERE mp.status = 'active'
GROUP BY mp.id, mp.plan_id, mp.name, c.name, pt.name, mp.plan_year, mp.premium, mp.deductible, 
         mp.max_out_of_pocket, mp.star_rating, mp.dental_coverage, mp.vision_coverage, mp.hearing_coverage,
         mp.fitness_benefits, mp.transportation, mp.otc_benefits, mp.network_size, mp.requires_referrals;

-- Create a function to get plans by location
CREATE OR REPLACE FUNCTION get_plans_by_location(p_zip_code VARCHAR(10))
RETURNS TABLE (
    plan_id UUID,
    plan_name VARCHAR(255),
    carrier_name VARCHAR(255),
    plan_type VARCHAR(100),
    premium DECIMAL(8,2),
    deductible DECIMAL(8,2),
    max_out_of_pocket DECIMAL(8,2),
    star_rating DECIMAL(2,1),
    dental_coverage BOOLEAN,
    vision_coverage BOOLEAN,
    hearing_coverage BOOLEAN,
    fitness_benefits BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        mp.id,
        mp.name,
        c.name,
        pt.name,
        mp.premium,
        mp.deductible,
        mp.max_out_of_pocket,
        mp.star_rating,
        mp.dental_coverage,
        mp.vision_coverage,
        mp.hearing_coverage,
        mp.fitness_benefits
    FROM medicare_plans mp
    JOIN carriers c ON mp.carrier_id = c.id
    JOIN plan_types pt ON mp.plan_type_id = pt.id
    JOIN plan_locations pl ON mp.id = pl.plan_id
    JOIN locations l ON pl.location_id = l.id
    WHERE l.zip_code = p_zip_code
    AND mp.status = 'active'
    ORDER BY mp.premium ASC, mp.star_rating DESC;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO postgres;

-- Update statistics
ANALYZE;

-- Display summary
SELECT 
    'Database seeded successfully!' as status,
    COUNT(*) as total_plans,
    COUNT(DISTINCT carrier_id) as total_carriers,
    COUNT(DISTINCT location_id) as total_locations
FROM medicare_plans mp
LEFT JOIN plan_locations pl ON mp.id = pl.plan_id;
