/*
Based on auto-generated code from: https://github.com/pmndrs/gltfjsx
*/

import { Mesh, MeshStandardMaterial, Group } from 'three';
import React, { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
	nodes: {
		Cloud: Mesh;
		Cloud001: Mesh;
		Cloud002: Mesh;
	};
	materials: {
		['Material.001']: MeshStandardMaterial;
	};
};

export default function Clouds(
	props: JSX.IntrinsicElements['group'] & {
		setCloudsDoneLoading: Dispatch<SetStateAction<boolean>>;
	}
) {
	useEffect(() => {
		console.log('CLOUDS DONE LOADING');
		props.setCloudsDoneLoading(true);
	}, [props]);

	const group = useRef<Group>();
	useFrame(({ clock }) => {
		console.assert(
			group !== undefined &&
				group.current !== undefined &&
				group !== null &&
				group.current !== null,
			{ group }
		);
		group!.current!.rotation.y = clock.getElapsedTime() / 3;
	});
	const { nodes, materials } = useGLTF('/clouds.glb') as GLTFResult;
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cloud.geometry}
				material={new MeshStandardMaterial({ color: '#ffffff' })}
				position={[0.24735296, -0.72191346, 6.21215582]}
				rotation={[-0.00571064, 0.22987353, 0.01382149]}
				scale={0.6781491}
				userData={{ name: 'Cloud' }}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cloud001.geometry}
				material={new MeshStandardMaterial({ color: '#ffffff' })}
				position={[-6.17658138, 0.82611781, -3.03061295]}
				rotation={[-2.37230829, 0.55652151, 1.5599999]}
				scale={0.6781491}
				userData={{ name: 'Cloud.001' }}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cloud002.geometry}
				material={new MeshStandardMaterial({ color: '#ffffff' })}
				position={[5.45620537, 3.57279372, -1.86408091]}
				rotation={[-1.42299119, 0.35910588, -1.32985327]}
				scale={0.6781491}
				userData={{ name: 'Cloud.002' }}
			/>
		</group>
	);
}

useGLTF.preload('/clouds.glb');
