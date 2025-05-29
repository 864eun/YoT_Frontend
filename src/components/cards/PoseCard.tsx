import React from 'react';

interface PoseCardProps {
  level?: string;
  imageUrl: string;
  title: string;
  subTitle?: string;
  description: string;
  tag?: string;
  onAdd?: () => void;
}

const PoseCard: React.FC<PoseCardProps> = ({
  level = 'beginner',
  imageUrl,
  title,
  subTitle,
  description,
  tag = 'standing',
  onAdd,
}) => {
  return (
    <div className=" rounded-xl mx-h-[368px] shadow-md overflow-hidden border border-stone-200 w-[220px] md:w-[278px] md:max-w-sm">
      <div className="relative bg-stone-50">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover md:w-[278px] md:h-[192px]"
        />
        <span className="absolute top-3 right-3 bg-stone-400 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
          {level}
        </span>
      </div>
      <div className="">
        <div className="py-4 px-3">
          <div className=" flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-stone-900">{title}</h3>
              {subTitle && (
                <span className="md:block italic text-stone-400 text-sm">
                  {subTitle}
                </span>
              )}
            </div>
            <button
              className="bg-stone-300 hover:bg-stone-400 text-stone-800 rounded-lg w-8 h-8 pb-1 flex items-center justify-center text-2xl font-bold transition p-0 leading-none"
              onClick={onAdd}
              aria-label="Add"
              type="button"
            >
              +
            </button>
          </div>
          <p className="hidden md:block text-gray-500 text-sm mb-2 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="hidden md:block  bg-stone-200 px-4 py-3 rounded-b-xl">
          <span className="inline-block border border-slate-300 rounded-full px-3 py-1 text-xs text-slate-600 bg-slate-50">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PoseCard;

// 사용 예시
/*
<YogaCard
  imageUrl="/your_image_path.jpg"
  title="Mountain Pose"
  subTitle="Tadasana"
  description="The foundation of all standing poses, Mountain Pose helps improve..."
  onAdd={() => alert('추가!')}
/>
*/
