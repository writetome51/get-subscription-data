# getSubscriptionData(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subscribable: Subscribable&lt;any&gt;<br>): Promise&lt;any&gt;

Async function that only returns the first data result of a [Subscription](https://rxjs-dev.firebaseapp.com/api/index/class/Subscription) 
(to a [Subscribable](https://rxjs-dev.firebaseapp.com/api/index/interface/Subscribable))  
and then unsubscribes automatically.  Useful if you only want the first result and don't  
need to keep the Subscription open.

## Examples
```js
async function logToConsole() {
    let data = await getSubscriptionData(
        sendHTTPRequest('http://website.com') // returns an observable
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
```js
import {getSubscriptionData} from '@writetome51/get-subscription-data';
```
