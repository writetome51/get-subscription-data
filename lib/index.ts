// Use this only if you expect a subscription to `observable` to return data once
// and then close.  Or use it if you only want to retrieve data from the subscription
// once.

async function getSubscriptionData(
	observable: { subscribe: (fn) => { unsubscribe: () => void } }
): Promise<any> {
	return new Promise((returnData) => {
		let subscription = observable.subscribe((result) => {
			returnData(result);
			subscription.unsubscribe();
		});
	});

}
