import '../../styles/testimonials.css';
import { useSelector } from 'react-redux';

export default function Testimonials() {

  const { testimonials } = useSelector((s) => s);

  return (
    <div className="bg-image-testimonials flex w-100vw h-[80vh] md:h-[90vh] xs:h-[200vh] pb-16 font-sans">
      <div className="flex justify-center testimonials-container">
        <section className="reviews 2xl:mt-20 xl:mt-10 lg:mt-20 md:mt-16 xs:mt-12">
          <div className="flex justify-center">
            <h2 className=" font-text font-bold text-black drop-shadow-xl 2xl:mb-20 xl:mb-10 2xl:text-5xl xl:text-4xl lg:text-4xl lg:mb-10 md:text-4xl md:mb-10 xs:text-4xl xs:mb-10">
              OPINIONES
            </h2>
          </div>

          <div className="swiper customer-reviews grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3">
            {testimonials?.map((s, index) => {
              return (
                <div key={index} className="swiper-wrapper w-[90%] xs:w-[100%] md:w-[100%]">
                  <div className="swiper-slide bg-[#fcfcfc] w-full review-card min-h-[55vh] sm:min-h-[45vh] md:min-h-[35vh] lg:min-h-[30vh] xl:min-h-[50vh] 2xl:min-h-[50vh]">
                    <img
                      className="quote-icon"
                      src={
                        "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/quote_s5hblr.png"
                      }
                    />
                    {/* <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}/> */}
                    {/* <h3 className='card-title lighter-blue'>I loved it</h3> */}
                    <p className="card-body pt-4 text-[#2a2a2a] 2xl:text-lg  xl:text-xs lg:text-[14px] md:text-[13px] xs:text-[13px] font-semibold">
                      {s?.review}
                    </p>

                    <div className="card-footer h-30 ">
                      <img src={s?.url} alt="profile photo" className="profile-photo" />
                      <div>
                        <span className="name text-[#000000] ">{s?.name}</span>
                        <div className="flex">
                          {/* <img
                            className="star w-6"
                            src={
                              "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"
                            }
                          />
                          <img
                            className="star w-6"
                            src={
                              "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"
                            }
                          />
                          <img
                            className="star w-6"
                            src={
                              "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"
                            }
                          />
                          <img
                            className="star w-6"
                            src={
                              "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"
                            }
                          />
                          <img
                            className="star w-6"
                            src={
                              "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196355/star_ewmvol.png"
                            }
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}