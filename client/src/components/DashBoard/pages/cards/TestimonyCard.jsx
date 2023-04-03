import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllTestimonials, putTestimonials, deleteTestimonials } from "../../../../redux/actions/actions";
import ReadMoreButton from "../../../ReadMoreButton/ReadMoreButton";


const TestimonyCard = ({ testimony }) => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		url: testimony?.url,
		name: testimony?.name,
		review: testimony?.review,
		fav: testimony?.fav,
		rate: testimony?.rate,
	});

	const handleFav = (id) => {
		const review = testimony;
		setData({
			...review,
			fav: !review.fav,
		});
		dispatch(
			putTestimonials(id, {
				...review,
				fav: !review.fav,
			})
		);
		setTimeout(() => {
			dispatch(getAllTestimonials());
		}, 200);
	};


  const handleFav = (id) => {
    const review = testimony
    setData({
      ...review,
      fav: !review.fav,
    });
    dispatch(putTestimonials(id, {
      ...review,
      fav: !review.fav,
    }));
    setTimeout(() => {
      dispatch(getAllTestimonials());
    }, 200);
  };

    const handleDelete = () =>{
      swal({
        title: "Querés borrar este testimonio?",
        text: "Si es así, click en Ok",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((result) => {
        if (result) {
          dispatch(deleteTestimonials(testimony.id));
          swal({
            title: "Testimonio borrado!",
            icon: "success",
          });
        } else {
          swal("Borrado descartado", "", "info");
        }
      });
    };
  

  return (
    <tr>
      {/* IMAGE */}
      <td className="px-2 py-3 pl-4 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <img
          src={testimony?.url ? testimony?.url : "https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png"}
          className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
        />
      </td>

      {/* NAME */}
      <td className="px-2 py-3 pl-11 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize">
          {testimony?.name}
        </p>
      </td>

      {/* TEXT*/}
      <td className="px-2 py-3 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60 capitalize">
        <ReadMoreButton text={testimony?.review} maxChars={20} />
        </p>
      </td>

      {/* FAV */}
      <td className="px-2 py-3 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <button
          className={
            testimony?.fav
              ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  border-black border-2"
              : "bg-[#fcfcfc] hover:bg-[#8c8b8b] hover:text-black text-grey font-bold py-2 px-4 rounded border-[#8c8b8b] border-2"
          }
          onClick={() => handleFav(testimony.id)}
        >
          {testimony?.fav ? "SI" : "NO"}
        </button>
      </td>
      {/* DELETE */}
			<td className="p-2 text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
				<i class="fa fa-trash-can text-xl cursor-pointer w-8 mr-2 text-grey-500 hover:text-red-500"
					onClick={handleDelete}
				></i>
			</td>
    </tr>
  );
}


export default TestimonyCard;
