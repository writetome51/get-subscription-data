# getSubscriptionData(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribable: Subscribable&lt;any&gt;<br>): Promise&lt;any&gt;

Async function that returns the data result of a Subscription (to a Subscribable)  
only once and then unsubscribes automatically.

## Examples
```ts
async function logToConsole() {
    let data = await getSubscriptionData(
        sendHTTPRequest('http://website.com') // returns a subscribable
    );
    console.log(data);
}

async function getFirstLottoNumber() {
    return await getSubscriptionData(lottoNumbersObservable);
}
```


## Installation
`npm i  @writetome51/get-subscription-data`

## Loading
```ts
// if using TypeScript:
import {getSubscriptionData} from '@writetome51/get-subscription-data';
// if using ES5 JavaScript:
var getSubscriptionData = 
    require('@writetome51/get-subscription-data').getSubscriptionData;
```
