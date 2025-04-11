import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "motion/react";

const Tabs = () => {
  return (
    <TabGroup>
      <TabPanels>
        <TabPanel className="rounded-xl bg-white/5 p-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744309707/images/project-1_jtjhag.png"
              alt=""
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="rounded-xl bg-white/5 p-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744295194/images/ChatGPT_Image_10_abr_2025_09_26_08_a.m._q6yyua.png"
              alt=""
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="rounded-xl bg-white/5 p-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744295075/images/ChatGPT_Image_10_abr_2025_09_17_09_a.m._pv6xam.png"
              alt=""
            />
          </motion.div>
        </TabPanel>
      </TabPanels>
      <TabList className="flex items-center justify-center gap-4 mt-2 p-3">
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-zinc-800/30 data-[hover]:bg-zinc-900/20 data-[selected]:data-[hover]:bg-zinc-900/20 data-[focus]:outline-1 data-[focus]:outline-white">
          Imagen 1
        </Tab>
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-zinc-800/20 data-[hover]:bg-zinc-900/20 data-[selected]:data-[hover]:bg-zinc-900/20 data-[focus]:outline-1 data-[focus]:outline-white">
          Imagen 2
        </Tab>
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-zinc-800/20 data-[hover]:bg-zinc-900/20 data-[selected]:data-[hover]:bg-zinc-900/20 data-[focus]:outline-1 data-[focus]:outline-white">
          Imagen 3
        </Tab>
      </TabList>
    </TabGroup>
  );
};

export default Tabs;
