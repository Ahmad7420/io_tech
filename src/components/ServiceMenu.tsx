import { useAppSelector } from "@/store";
import { Services } from "@/types/types";
import {
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment } from "react";

export const ServiceMenu: React.FC = () => {
  // Sample services data for 4x5 grid (20 items)
  const t = useTranslations("Services");
  const locale = useAppSelector((state) => state.language.locale);

  const services: Services[] = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: t(`${i + 1}`),
  }));

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <MenuButton className="inline-flex items-center gap-2 px-3 py-1.5 text-sm/6 border-none">
            {t("title")}
            {open ? (
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems
              transition
              anchor="bottom end"
              className="w-[90%] origin-top-left mx-12 rounded-xl z-20 bg-[#4B2615] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <div className="grid grid-cols-4 grid-rows-5 gap-4">
                {services.map((service) => (
                  <MenuItem key={service.id}>
                    <Link
                      href={`${locale}/services/${service.id}`}
                      className="block hover:bg-white/10 p-2 rounded"
                    >
                      {service.title}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};
