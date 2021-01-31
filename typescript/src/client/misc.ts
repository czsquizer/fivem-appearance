interface HairDecal {
  id: number;
  collection: string;
  overlay: string;
}

interface HairDecals {
  male: HairDecal[];
  female: HairDecal[];
}

// Thanks to rootcause for the eye colors original names
const eyeColors: string[] = [
  'Verde',
  'Esmeralda',
  'Azul Claro',
  'Azul Oceano',
  'Marrom Claro',
  'Marrom Escuro',
  'Avelã',
  'Cinza Escuro',
  'Cinza Claro',
  'Rosa',
  'Amarelo',
  'Roxo',
  'Apagão',
  'Tons de Cinza',
  'Tequila Sunrise',
  'Atomic',
  'Warp',
  'ECola',
  'Space Ranger',
  'Ying Yang',
  'Bullseye',
  'Lagarto',
  'Dragão',
  'Extra Terrestre',
  'Goat',
  'Smiley',
  'Possuído',
  'Demônio',
  'Infectado',
  'Alien',
  'Morto-vivo',
  'Zumbi',
];

// Thanks to rootcause for the hair tattos hashes
const hairDecals: HairDecals = {
  male: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    { id: 24, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    { id: 31, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    { id: 36, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    { id: 72, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_000_M' },
    { id: 73, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_001_M' },
  ],
  female: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    { id: 23, collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    { id: 31, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    { id: 36, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 37, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    { id: 38, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    { id: 76, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_000_F' },
    { id: 77, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_001_F' },
  ],
};

const getPedHairDecorationType = (ped: number): 'male' | 'female' => {
  const pedModel = GetEntityModel(ped);

  let hairDecorationType;

  if (pedModel === GetHashKey('mp_m_freemode_01')) {
    hairDecorationType = 'male';
  } else if (pedModel === GetHashKey('mp_f_freemode_01')) {
    hairDecorationType = 'female';
  }

  return hairDecorationType;
};

export const getPedHairDecal = (ped: number, hairStyle: number): HairDecal => {
  const hairDecorationType = getPedHairDecorationType(ped);

  if (!hairDecorationType) return;

  const hairDecal = hairDecals[hairDecorationType].find(
    hairDecoration => hairDecoration.id === hairStyle,
  );

  return hairDecal;
};
