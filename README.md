# datacache
Module provides indexing and access to datacache service functions

1. Instantiate datacache-request object
const DC = require('datacache-request');

2. Get the api-key from market.mashape.com, search for Calendar by data-cache

3. Create a calendar object using the api-key, thus obtained
let calendar = new DC.Calendar("api key");  

4. Call the api functions for the Calendar object, using the function call
calendar.exec(endpoint, data);

where endpoint is one of the endpoints from the documentation - reserve, free, merge, check
and; data is the input schema, as per the documentation





