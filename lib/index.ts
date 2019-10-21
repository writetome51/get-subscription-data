import { Subscribable } from 'rxjs';


// Use this if you only want to retrieve data from the subscription
// once.

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
