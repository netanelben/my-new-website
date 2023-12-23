import React from 'react'

const PENS = ['bGzXKJK', 'GRdJpvr']

export const FavoritePens = () => (
  <div className="w-full">
    <div className="font-bold text-xl">Favorite Pens.</div>
    <div className="max-h-[450px] overflow-y-auto w-full flex flex-col gap-3">
      {PENS.map((penId) => (
        <iframe
          className="h-[300px] w-full shrink-0"
          loading="lazy"
          height="300"
          title="Cookies Banner with Sound and Info Text"
          src={`https://codepen.io/NateBen/embed/${penId}?default-tab=result`}
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{' '}
          <a href={`https://codepen.io/NateBen/pen/${penId}`}>
            Cookies Banner with Sound and Info Text
          </a>{' '}
          by Nate (<a href="https://codepen.io/NateBen">@NateBen</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      ))}
    </div>
  </div>
)
