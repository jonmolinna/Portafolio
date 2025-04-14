import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "motion/react";
import { tabProjectInterface } from "../../interface/project.interface";

type Props = {
  data: Array<tabProjectInterface>;
};

const Tabs: React.FC<Props> = ({ data }) => {
  return (
    <TabGroup>
      <TabPanels>
        {data.map(({ posts }, index) => (
          <TabPanel key={index} className="rounded-xl bg-white/5 p-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {posts.map((post, index) => (
                <img key={index} src={post.url} alt={`image_${post.id}`} />
              ))}
            </motion.div>
          </TabPanel>
        ))}
      </TabPanels>
      <TabList className="flex items-center justify-center gap-4 mt-2 p-3">
        {data.map(({ name }, index) => (
          <Tab
            key={index}
            className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-zinc-800/30 data-[hover]:bg-zinc-900/20 data-[selected]:data-[hover]:bg-zinc-900/20 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            {name}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Tabs;
