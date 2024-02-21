const stripe = Stripe('pk_test_51OlctSAGX2VNJiikTbnRvZ0hwFYXpinHugEl17jadAPMkeNEhADbam5HusghEACPo5NM4JUDhPyiKRqQbdGxVxKo00OTtB4QPE');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});