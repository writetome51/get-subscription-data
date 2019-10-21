# getSubscriptionData(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribable: Subscribable&lt;any&gt;<br>): Promise&lt;any&gt;

Async function that only returns the first data result of a Subscription (to a Subscribable)  
and then unsubscribes automatically.  Useful if you only want the first result and don't  
need to keep the Subscription open.

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
