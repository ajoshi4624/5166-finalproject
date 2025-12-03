require('dotenv').config();
const mongoose = require('mongoose');
const Chart = require('./models/Chart');

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI not set in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB, seeding charts...');

   
    await Chart.deleteMany({});

    const charts = [
      {
        name: 'chart1',
        description:
          'Estimated growth in co-branded Panthers–UNC Charlotte activations by season, based on the Nov. 6, 2025 partnership announcement.',
        data: [
          { label: '2024 (pre-partnership)', value: 2 },
          { label: '2025', value: 5 },
          { label: '2026 (projected)', value: 9 },
          { label: '2027 (projected)', value: 12 }
        ]
      },
      {
        name: 'chart2',
        description:
          'Approximate distribution of partnership benefits across key areas (student opportunities, community engagement, and brand visibility).',
        data: [
          { label: 'Student internships & talent pipeline', value: 40 },
          { label: 'Game-day & community events', value: 30 },
          { label: 'Digital campaigns & branding', value: 20 },
          { label: 'Scholarships & outreach programs', value: 10 }
        ]
      }
    ];

    await Chart.insertMany(charts);
    console.log('✅ Seeded chart1 and chart2 successfully.');
  } catch (err) {
    console.error('❌ Error seeding charts:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
