import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';
import Stripe from 'stripe';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Injectable()
export class PaymentsService {

  private readonly stripe = new Stripe(envs.stripeSecret);


  async createPaymentSession(paymentSessionDto: PaymentSessionDto) {

    const { currency, items } = paymentSessionDto;

    const lineItems = items.map( item => {
      return {
        price_data: {
          currency: currency,
          product_data: {
            name: item.name
          },
          unit_amount: Math.round(  item.price * 100 ), // 20 dólares 2000 / 100 = 20.00 // 15.0000
        },
        quantity: item.quantity
      }
    })




    const session = await this.stripe.checkout.sessions.create({
      // Colocar aquí el ID de mi orden
      payment_intent_data: {
        metadata: {}
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3003/payments/success',
      cancel_url: 'http://localhost:3003/payments/cancel',

    });


    return session;
  }


}
