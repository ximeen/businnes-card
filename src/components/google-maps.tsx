import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Separator } from "./ui/separator";

const orenImp = {
	lat: -5.5198865,
	lng: -47.4639448,
};

const orenBal = {
	lat: -7.514912418061827,
	lng: -46.03889460916138,
};

export function GoogleMaps() {
	const zoomMap = 15

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_KEY}`,
	});

	const [_, setMap] = useState<any>(null);

	const onLoadImp = useCallback(function callback(map: any) {
		new window.google.maps.LatLngBounds(orenImp);
		setMap(map);
	}, []);
	const onLoadBal = useCallback(function callback(map: any) {
		new window.google.maps.LatLngBounds(orenBal);
		setMap(map);
		
	}, []);

	const onUnmount = useCallback(function callback(_map: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<>
			<div className="relative mt-5">
				<Separator className="lg:w-[800px] w-96" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Imperatriz
				</span>
			</div>
			<div className=" lg:w-[800px] lg:h-[250px] w-[90%] h-72">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
						borderRadius: "16px",
					}}
					center={orenImp}
					onLoad={onLoadImp}
					onUnmount={onUnmount}
					zoom={zoomMap}
				>
					<Marker position={orenImp} />
					<></>
				</GoogleMap>
			</div>
			<div className="relative">
				<Separator className="lg:w-[800px] w-96" />

				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Balsas
				</span>
			</div>
			<div className="lg:w-[800px] lg:h-[250px] w-[90%] h-72">
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100%",
						borderRadius: "16px",
					}}
					center={orenBal}
					onLoad={onLoadBal}
					onUnmount={onUnmount}
					zoom={zoomMap}

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
