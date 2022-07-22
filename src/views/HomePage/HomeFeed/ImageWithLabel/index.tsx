import { Link } from "react-router-dom";
import Image from "../../../../common/Image";
import { RandomPhoto } from "../../../../types/random";
import { classNames } from "../../../../utils";

export const ImageWithLabel = ({
	randomPhoto,
	index,
}: {
	randomPhoto: RandomPhoto;
	index: number;
}) => {
	return (
		<>
			<div
				className={classNames(
					index === 0 || index === 11 ? "col-span-2 row-span-2" : "col-span-1",
					"h-full w-full aspect-square relative lg:block hidden"
				)}
			>
				<Image
					blurHash={randomPhoto.blur_hash}
					loading="lazy"
					alt={randomPhoto.description}
					objectFit="cover"
					urls={randomPhoto.urls}
					src={randomPhoto.urls.small}
				/>

				<Link to={`/user/${randomPhoto.user.username}`}>
					<div
						style={{
							background: `${randomPhoto.color}`,
						}}
						className="absolute backdrop-blur w-fit shadow-2xl shadow-red-900 rounded-md m-2 py-2 px-3 bottom-0 flex items-center gap-2"
					>
						<div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-40 transition-all rounded-md"></div>
						<div className="h-10 w-10 pointer-events-none">
							<Image
								imageCustomStyles={{ borderRadius: "9999px" }}
								loading="lazy"
								alt={randomPhoto.user.name}
								objectFit="cover"
								urls={randomPhoto.user.profile_image}
								src={randomPhoto.user.profile_image.medium}
							/>
						</div>
						<p className="text-white z-10 font-medium text-sm pointer-events-none">
							{randomPhoto.user.name}
						</p>
					</div>
				</Link>
			</div>
			<div
				className={classNames(
					index === 0 || index === 10 ? "md:col-span-2 md:row-span-2" : "col-span-1",
					"h-full w-full aspect-square relative lg:hidden block"
				)}
			>
				<Image
					blurHash={randomPhoto.blur_hash}
					loading="lazy"
					alt={randomPhoto.description}
					objectFit="cover"
					urls={randomPhoto.urls}
					src={randomPhoto.urls.small}
				/>

				<Link to={`/user/${randomPhoto.user.username}`}>
					<div className="absolute w-full py-4 px-6 bottom-0 flex items-center gap-2">
						<div className="h-10 w-10">
							<Image
								imageCustomStyles={{ borderRadius: "9999px" }}
								loading="lazy"
								alt={randomPhoto.user.name}
								objectFit="cover"
								urls={randomPhoto.user.profile_image}
								src={randomPhoto.user.profile_image.medium}
							/>
						</div>
						<p className="text-white">{randomPhoto.user.name}</p>
					</div>
				</Link>
			</div>
		</>
	);
};
