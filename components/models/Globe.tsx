/*
Based on auto-generated code from: https://github.com/pmndrs/gltfjsx
*/

import { Mesh, MeshStandardMaterial, Group } from 'three';
import React, { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
	nodes: {
		Globe: Mesh;
	};
	materials: {
		Material: MeshStandardMaterial;
	};
};

export default function Globe(
	props: JSX.IntrinsicElements['group'] & {
		setGlobeDoneLoading: Dispatch<SetStateAction<boolean>>;
	}
) {
	useEffect(() => {
		console.log('GLOBE DONE LOADING');
		props.setGlobeDoneLoading(true);
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
		group!.current!.rotation.y = clock.getElapsedTime() / 10;
	});
	const { nodes, materials } = useGLTF('/globe.glb') as GLTFResult;
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Globe.geometry}
				material={materials.Material}
				userData={{ name: 'Globe' }}
			/>
		</group>
	);
}

useGLTF.preload('/globe.glb');
