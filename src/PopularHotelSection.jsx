import React, { useEffect, useState } from 'react'

export default function PopularHotelSection() {
  
  const [items, setItems] = useState([]); // here items keep the current items to displayed in the container
  const [itemDisplayState, setItemDisplayState] = useState('hotels');
  // itemDisplayStates => ['hotels', 'restaurants', 'places'] (for dynamic display of different categories)

  const apiData = {
    hotels: [
      {
        name: 'Little Jaisal Haveli',
        price: 2400,
        location: 'Jaipur',
        rating: 4.2,
        reviews: 16000,
        parking: true,
        image: '/imgs/hotel1.png'
      },
      {
        name: 'Hotel Rajsthan Palace',
        price: 5610,
        location: 'Jaipur',
        rating: 4.2,
        reviews: '1.6k',
        parking: false,
        image: '/imgs/hotel2.png'
      },
      {
        name: 'Sheel Mahal - Near Hawa Mahal',
        price: 1200,
        location: 'Jaipur',
        rating: 4.2,
        reviews: '1.6k',
        parking: true,
        image: '/imgs/hotel3.png'
      },
      {
        name: 'Hukamgarh - A Luxury Boutique Stay',
        price: 3800,
        location: 'Jaipur',
        rating: 4.2,
        reviews: '1.6k',
        parking: true,
        image: '/imgs/hotel4.png'
      },
      {
        name: 'Super Hotel O Moti Doongri',
        price: 800,
        location: 'Jaipur',
        rating: 4.2,
        reviews: '1.6k',
        parking: false,
        image: '/imgs/hotel5.png'
      },
      {
        name: 'Grand Uniara A Heritage Hotel',
        price: 8950,
        location: 'Jaipur',
        rating: 4.2,
        reviews: '1.6k',
        parking: true,
        image: '/imgs/hotel6.png'
      }
    ],


    restaurants: [
      {
        name: 'Annapoorna Resturant',
        location: 'Jaipur',
        rating: 5.4,
        reviews: 1800,
        parking: false,
        price: 900,
        image: '/imgs/hotel3.png'
      },
      {
        name: 'Spice Garden',
        location: 'Mumbai',
        rating: 4.2,
        reviews: 2450,
        parking: true,
        price: 1200,
        image: '/imgs/hotel1.png'
      },
      {
        name: 'Desert Delight',
        location: 'Jaisalmer',
        rating: 4.5,
        reviews: 1520,
        parking: true,
        price: 1000,
        image: '/imgs/hotel1.png'
      },
      {
        name: 'Rajputana Thali House',
        location: 'Udaipur',
        rating: 4.7,
        reviews: 1980,
        parking: false,
        price: 850,
        image: '/imgs/hotel2.png'
      },
      {
        name: 'The Camel Curry',
        location: 'Bikaner',
        rating: 4.2,
        reviews: 1345,
        parking: true,
        price: 950,
        image: '/imgs/hotel3.png'
      },
      {
        name: 'Heritage Haveli Dining',
        location: 'Pushkar',
        rating: 4.0,
        reviews: 890,
        parking: true,
        price: 1050,
        image: '/imgs/hotel4.png'
      },
    ],

    places: [

      {
        name: 'Desert Pearl Resort',
        price: 3200,
        location: 'Jaisalmer',
        rating: 4.5,
        reviews: 9200,
        parking: true,
        image: '/imgs/hotel3.png'
      },
      {
        name: 'Udaipur Lake Retreat',
        price: 4800,
        location: 'Udaipur',
        rating: 4.7,
        reviews: '2.1k',
        parking: true,
        image: '/imgs/hotel4.png'
      },
      {
        name: 'Bikaner Heritage Inn',
        price: 2100,
        location: 'Bikaner',
        rating: 4.0,
        reviews: 4300,
        parking: false,
        image: '/imgs/hotel5.png'
      },
      {
        name: 'Pushkar Bliss Hotel',
        price: 2600,
        location: 'Pushkar',
        rating: 4.3,
        reviews: '1.2k',
        parking: true,
        image: '/imgs/hotel6.png'
      },
      {
        name: 'Ajmer Royale Stay',
        price: 3500,
        location: 'Ajmer',
        rating: 4.1,
        reviews: 3700,
        parking: false,
        image: '/imgs/hotel4.png'
      },
      {
        name: 'Mount Abu Eco Resort',
        price: 4100,
        location: 'Mount Abu',
        rating: 4.4,
        reviews: '980',
        parking: true,
        image: '/imgs/hotel2.png'
      }

    ]


  }
  useEffect(() => {
    if (itemDisplayState === 'hotels') setItems(apiData.hotels);
    else if (itemDisplayState === 'restaurants') setItems(apiData.restaurants);
    else if (itemDisplayState === 'places') setItems(apiData.places);
  }, [itemDisplayState])

  // Utility Functions (I could have created it separately in utils folder if needed for bigger codebase)

  // limits the number for letters for small display areas
  // [Replaces it with ...]
  const textSlicer = (word, index) => {
    if (!word) return '';
    return word.length > index ? word.slice(0, index) + '...' : word;
  };
  
  // changes numbers count to k, m and b
  const countFormatter = (count) => {
    const format = (num) => {
      const fixed = num.toFixed(1);
      return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
    };

    if (count >= 1000000000) return format(count / 1000000000) + 'B';
    if (count >= 1000000) return format(count / 1000000) + 'M';
    if (count >= 1000) return format(count / 1000) + 'K';
    return count;
  };


  return (
    <>
      <div className='PopularHotelSection grid grid-cols-1 gap-6 xl:grid-cols-[65%_33%] xl:gap-[2%] text-2xl  w-full h-100 text-tcolor'>
        <div className='w-full flex flex-col mt-2 gap-5'>
          <div className="tabs flex w-full gap-3 font-secondary">
            <button className={`text-base px-4 py-2 w-1/3 border-b-2 ${itemDisplayState === 'hotels' ? 'text-primary border-primary' : 'border-bcolor'}  cursor-pointer hover:border-primary font-semibold hover:text-primary transtion durection-300`} onClick={() => { setItemDisplayState('hotels') }}>Hotels</button>
            <button className={`text-base px-4 py-2 w-1/3 border-b-2 ${itemDisplayState === 'restaurants' ? 'text-primary border-primary' : 'border-bcolor'}   cursor-pointer hover:border-primary font-semibold hover:text-primary transtion durection-300`} onClick={() => setItemDisplayState('restaurants')}>Restaurants</button>
            <button className={`text-base px-4 py-2 w-1/3 border-b-2 ${itemDisplayState === 'places' ? 'text-primary border-primary' : 'border-bcolor'} cursor-pointer hover:border-primary font-semibold hover:text-primary transtion durection-300`} onClick={() => setItemDisplayState('places')}>Places</button>
          </div>
          <div className="card-container-wrapper flex flex-col gap-6">
            <div className="container-head flex-row flex justify-between">
              <h2 className='title font-primary font-semibold text-lg sm:text-2xl'>Popular {itemDisplayState}</h2>
              <a href="#" className="font-normal font-secondary text-link-blue flex items-center text-base gap-4">
                Explore
                <img src="/icons/chevron_forward.png" alt="chevron_forward" className="w-auto h-auto" />
              </a>
            </div>

            <div className="card-container flex flex-wrap gap-4">
              {items.map((item, index) => (
                <div className="card flex-1/2 md:flex-1/3 flex " key={index}>
                  <div><img src={item?.image} alt="item_image" className='w-full h-full' /></div>

                  <div className='w-full py-4 px-3 gap-1 flex-col flex rounded-lg bg-white'>
                    <div className="name-price flex justify-between w-full">
                      <p className="item-name text-base font-secondary">{textSlicer(item?.name, 25)}</p>
                      <p className="item-price font-primary text-lg flex flex-col font-light"><span className='leading-3'>₹{item.price}</span> <span className='text-2xs font-secondary text-center'>/night</span></p>
                    </div>

                    <div className="tags-cta flex flex-row justify-between">

                      <div className="tags-container flex flex-col gap-1">
                        <div className='location-parking flex flex-row gap-1'>
                          <p className="location flex flex-row gap-1">
                            <img src="/icons/location_on.png" alt="location_icon" className='w-auto h-auto' />
                            <span className='text-xs'>{item.location}</span>
                          </p>
                          <p className="parking flex flex-row gap-1">
                            <img src="/icons/car_tag.png" alt="car_icon" className='' />
                            {item.parking ? <img src='/icons/task_alt.png' alt='corr_icon' /> : <img src='/icons/close_small.png' className='w-auto h-auto' />}
                          </p>
                        </div>
                        <div className='rating-reviews flex flex-row gap-3 font-secondary'>
                          <p className="location flex flex-row gap-1">
                            <img src="/icons/star.png" alt="location_icon" className='w-auto h-auto' />
                            <span className='text-xs font-bold text-dark-gray'>{item.rating}</span>
                          </p>
                          <p className="parking flex flex-row gap-1">
                            <img src="/icons/reviews.png" alt="car_icon" className='' />
                            <span className='text-xs font-bold text-dark-gray'>{countFormatter(item.reviews)}</span>
                          </p>
                        </div>
                      </div>
                      <button className='rounded-full border-primary border-1 py-1 px-4 font-bold font-secondary cursor-pointer text-primary text-xs'>Check Now</button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className="head flex justify-between p-2">
            <h2 className="title font-primary font-semibold text-lg sm:text-2xl">Nearby Locations</h2>

            <a href="#" className="font-normal font-secondary text-link-blue flex items-center text-base gap-4">
              View Map
              <img src="/icons/chevron_forward.png" alt="chevron_forward" className="w-auto h-auto" />
            </a>

          </div>
          <div className="map my-5">
            <img src="/imgs/Maps.png" alt="maps" className='w-full ' />
          </div>
        </div>
      </div>
    </>
  )
}
