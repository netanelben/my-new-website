import React from 'react'

const PENS = ['bGzXKJK', 'GRdJpvr']

export const FavoritePens = () => (
  <div className="w-full">
    <div className="font-bold text-xl text-center my-4">Latest Pens</div>
    <div className="h-full w-full flex flex-col gap-6">
      {PENS.map((penId) => (
        <iframe
          className="h-[270px] w-full shrink-0 my-3 rounded-xl"
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
