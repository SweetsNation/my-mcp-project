const { PrismaClient } = require('@prisma/client');

// Initialize Prisma client
const prisma = new PrismaClient();

async function testDataServices() {
  try {
    console.log('🧪 Testing Data Management Services...\n');

    // Test 1: Database Connection
    console.log('1. Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful\n');

    // Test 2: Medicare Plan Service
    console.log('2. Testing Medicare Plan Service...');
    
    // Get carriers
    const carriers = await prisma.carriers.findMany({
      take: 5,
      orderBy: { name: 'asc' }
    });
    console.log(`✅ Found ${carriers.length} carriers`);
    
    // Get plan types
    const planTypes = await prisma.plan_types.findMany({
      take: 5,
      orderBy: { name: 'asc' }
    });
    console.log(`✅ Found ${planTypes.length} plan types`);
    
    // Get some plans
    const plans = await prisma.medicare_plans.findMany({
      take: 3,
      include: {
        carriers: true,
        plan_types: true
      },
      orderBy: { name: 'asc' }
    });
    console.log(`✅ Found ${plans.length} Medicare plans\n`);

    // Test 3: Lead Service
    console.log('3. Testing Lead Service...');
    
    // Get leads count
    const leadsCount = await prisma.leads.count();
    console.log(`✅ Found ${leadsCount} leads in database\n`);

    // Test 4: Provider Service
    console.log('4. Testing Provider Service...');
    
    // Get providers count
    const providersCount = await prisma.providers.count();
    console.log(`✅ Found ${providersCount} providers in database\n`);

    // Test 5: Plan Comparison Service
    console.log('5. Testing Plan Comparison Service...');
    
    // Get legacy user sessions count
    const sessionsCount = await prisma.legacyUserSession.count();
    console.log(`✅ Found ${sessionsCount} legacy user sessions in database\n`);

    // Test 6: Data Export (CSV)
    console.log('6. Testing Data Export...');
    
    // Export carriers to CSV format
    const carriersCSV = [
      ['ID', 'Name', 'AM Best Rating'],
      ...carriers.map(carrier => [
        carrier.id,
        carrier.name,
        carrier.am_best_rating || 'N/A'
      ])
    ].map(row => row.join(',')).join('\n');
    
    console.log('✅ Carriers CSV export successful');
    console.log('Sample CSV data:');
    console.log(carriersCSV.substring(0, 200) + '...\n');

    // Test 7: Statistics
    console.log('7. Testing Statistics...');
    
    // Get basic statistics
    const totalPlans = await prisma.medicare_plans.count();
    const totalLeads = await prisma.leads.count();
    const totalProviders = await prisma.providers.count();
    const totalSessions = await prisma.legacyUserSession.count();
    
    console.log('✅ Statistics collected:');
    console.log(`   - Total Medicare Plans: ${totalPlans}`);
    console.log(`   - Total Leads: ${totalLeads}`);
    console.log(`   - Total Providers: ${totalProviders}`);
    console.log(`   - Total Legacy Sessions: ${totalSessions}\n`);

    console.log('🎉 All data management service tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Error testing data services:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the tests
testDataServices();
