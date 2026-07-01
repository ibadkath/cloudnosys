import Image from "next/image";
import { ShineBorder } from "./ui/shine-border";

export default function InventorySection() {
  return (
    <section className="w-full flex justify-center mt-0">
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 12, display: "inline-block" }}>
        <Image
          src="/images/Inventory/inventory.png"
          alt="Inventory"
          width={1144}
          height={739}
        />
        <ShineBorder shineColor="#1567FF" duration={6} />
      </div>
    </section>
  );
}
