import { motion } from 'framer-motion';

function PageHeader({ imgsrc, value }) {
  return (
    <div>
      <div className="relative top-0 w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgsrc}
          alt="Create Video Background"
        />
        <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 h-[90px] md:h-[160px] flex items-end overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-extrabold text-stone-100 text-5xl md:text-8xl whitespace-nowrap"
          >
            {value}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
