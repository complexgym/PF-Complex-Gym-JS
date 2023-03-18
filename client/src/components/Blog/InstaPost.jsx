import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPost({url}){
	return(
		<InstagramEmbed
			url={url}
			clientAccessToken='3404509329817188|IGQVJYUlp4anBUaktoZADRIUGhwblVEekdBWTZAFWVVSUjFLV1U3SGZAwN1ljcWd2STNWNUpDN0ZAWX2NLT01FSGpyUkNIMVdtQ0ZA3bVk5Um1qbU11SGFqbTNFWmtmRWlvT0RxTVVneU82M1hyZAG1RZAWgyUgZDZD'
			// hideCaption={false}
			// maxWidth={200}
			// containerTagName='div'
			className="w-10/12 md:w-11/12 mx-auto h-[60vh] md:h-[55vh] overflow-hidden rounded"
		/>
	)
}