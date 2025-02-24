import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Separator } from "./ui/separator";

const orenImp = {
	lat: -5.519913772382692,
	lng: -47.46394738909955,
};

const orenBal = {
	lat: -7.514912418061827,
	lng: -46.03889460916138,
};

export function GoogleMaps() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_KEY}`,
	});

	const [_, setMap] = useState<any>(null);

	const onLoadImp = useCallback(function callback(map: any) {
		const bounds = new window.google.maps.LatLngBounds(orenImp);
		map.fitBounds(bounds);

		setMap(map);
	}, []);
	const onLoadBal = useCallback(function callback(map: any) {
		const bounds = new window.google.maps.LatLngBounds(orenBal);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(_map: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<>
			<div className="relative mt-5">
				<Separator className="lg:w-[680px] w-96" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Imperatriz
				</span>
			</div>
			<div className=" lg:w-[680px] lg:h-[250px] w-[90%] h-72">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
						borderRadius: "16px",
					}}
					center={orenImp}
					zoom={13}
					onLoad={onLoadImp}
					onUnmount={onUnmount}
				>
					<Marker position={orenImp} />
					<></>
				</GoogleMap>
			</div>
			<div className="relative">
				<Separator className="lg:w-[680px] w-96" />

				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Balsas
				</span>
			</div>
			<div className="lg:w-[680px] lg:h-[250px] w-[90%] h-72">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
						borderRadius: "16px",
					}}
					center={orenBal}
					zoom={13}
					onLoad={onLoadBal}
					onUnmount={onUnmount}
				>
					<Marker position={orenBal} />
					<></>
				</GoogleMap>
			</div>
		</>
	) : (
		<></>
	);
}
