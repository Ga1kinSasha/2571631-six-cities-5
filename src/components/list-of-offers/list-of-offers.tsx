import { OfferType } from '../../mocks/offer';
import { PlaceCard } from '../placecard/place-card';
import { useState } from 'react';


export function OfferList({offers}: {offers : OfferType[]}): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />))}
    </div>
  );
}
