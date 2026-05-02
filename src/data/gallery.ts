import pitchedRoofRed from "@/assets/gallery/pitched-roof-replacement-red-tiles-blackpool-lake-side-roofing.jpg";
import newRoofAerial from "@/assets/gallery/new-roof-installation-red-tiles-aerial-view-lake-side-roofing-blackpool.jpg";
import roofGreyTiles from "@/assets/gallery/roof-replacement-anthracite-grey-tiles-lancashire-lake-side-roofing.jpg";
import newRoofSunset from "@/assets/gallery/new-roof-grey-tiles-sunset-fylde-coast-lake-side-roofing.jpg";
import pitchedHipRidge from "@/assets/gallery/pitched-roof-installation-red-tiles-hip-ridge-lake-side-roofing-lancashire.jpg";
import roofChimneyStack from "@/assets/gallery/roof-replacement-red-clay-tiles-chimney-stack-lake-side-roofing-blackpool.jpg";
import leadFlashing from "@/assets/gallery/lead-flashing-chimney-repair-lake-side-roofing-blackpool-lancashire.jpg";
import roofRepairRed from "@/assets/gallery/roof-repair-red-interlocking-tiles-lancashire-lake-side-roofing.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  fetchPriority?: "high";
}

export const galleryImages: GalleryImage[] = [
  {
    src: pitchedRoofRed,
    alt: "Pitched roof replacement with red clay tiles completed by Lake Side Roofing Group in Blackpool",
    title: "Pitched Roof Replacement — Blackpool",
    width: 1000,
    height: 1000,
    loading: "lazy",
  },
  {
    src: newRoofAerial,
    alt: "Aerial view of new roof installation with red tiles by Lake Side Roofing Group serving Blackpool and Lancashire",
    title: "New Roof Installation — Lancashire",
    width: 1024,
    height: 1024,
    loading: "lazy",
  },
  {
    src: roofGreyTiles,
    alt: "Full roof replacement with anthracite grey concrete tiles completed by Lake Side Roofing Group in Lancashire",
    title: "Roof Replacement — Anthracite Grey Tiles",
    width: 1024,
    height: 758,
    loading: "lazy",
  },
  {
    src: newRoofSunset,
    alt: "New roof installation with grey interlocking tiles on Fylde Coast property by Lake Side Roofing Group",
    title: "New Roof — Fylde Coast",
    width: 752,
    height: 543,
    loading: "eager",
    fetchPriority: "high",
  },
  {
    src: pitchedHipRidge,
    alt: "Pitched roof installation showing hip and ridge tile detail completed by Lake Side Roofing Group in Lancashire",
    title: "Pitched Roof Installation — Hip & Ridge Detail",
    width: 930,
    height: 1000,
    loading: "lazy",
  },
  {
    src: roofChimneyStack,
    alt: "Roof replacement with red clay tiles and chimney stack by Lake Side Roofing Group serving Blackpool",
    title: "Roof Replacement with Chimney — Blackpool",
    width: 900,
    height: 1200,
    loading: "lazy",
  },
  {
    src: leadFlashing,
    alt: "Lead flashing and chimney repair completed by Lake Side Roofing Group in Blackpool and Lancashire",
    title: "Lead Flashing & Chimney Repair — Blackpool",
    width: 720,
    height: 960,
    loading: "lazy",
  },
  {
    src: roofRepairRed,
    alt: "Roof repair with red interlocking tiles on residential property by Lake Side Roofing Group in Lancashire",
    title: "Roof Repair — Red Interlocking Tiles",
    width: 1024,
    height: 1100,
    loading: "lazy",
  },
];

/** Subset for homepage preview: images 3, 4, 6, 7 (0-indexed: 2, 3, 5, 6) */
export const homepageGalleryImages = [
  galleryImages[2],
  galleryImages[3],
  galleryImages[5],
  galleryImages[6],
];
