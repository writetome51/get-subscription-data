// Use this only if you expect a subscription to `subscribable` to return data once
// and then close.  Or use it if you only want to retrieve data from the subscription
// once.

import { Subscribable } from 'rxjs';


export async function getSubscriptionData(
	subscribable: Subscribable<any>
): Promise<any> {

	return new Promise((returnData) => {
		let subscription = subscribable.subscribe((data) => {
			returnData(data);

			subscription.unsubscribe();
		});
	});
}
