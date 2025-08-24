#!/bin/bash

echo "🧪 Testing DataForSEO API with curl..."

# DataForSEO API credentials
LOGIN="inquiry@elmaginsurance.com"
PASSWORD="0f256932a691f1f1"

# Test keyword
KEYWORD="Medicare Advantage plans"

echo "🔍 Researching: $KEYWORD"
echo "⏳ Please wait..."

# Make API request
curl -X POST "https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions" \
  -H "Content-Type: application/json" \
  -u "$LOGIN:$PASSWORD" \
  -d "{
    \"keyword\": \"$KEYWORD\",
    \"location_code\": 2840,
    \"language_code\": \"en\",
    \"depth\": 1
  }" \
  --max-time 30

echo ""
echo "✅ Test completed!"
