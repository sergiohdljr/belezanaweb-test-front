export interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

export interface ImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}

export interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

export const Product = () => {
  return (
    <div className="w-full h-16 p-1 flex gap-1 justify-between items-center">
      <figure className=" w-14 h-14">
        <img
          src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
          alt=""
          className="w-full h-full"
        />
      </figure>
      <p className="text-xs flex flex-1">
        L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de
        Reconstrução
      </p>
      <div className="h-5/6 flex flex-col justify-between">
        <span className="text-sm">R$: 65,88</span>
        <span className="text-sm">R$: 165,88</span>
      </div>
    </div>
  );
};
