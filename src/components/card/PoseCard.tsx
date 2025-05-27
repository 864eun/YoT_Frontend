import React from 'react';

interface PoseCardProps {
  level?: string;
  duration?: string;
  imageUrl: string;
  title: string;
  subTitle?: string;
  description: string;
  tag?: string;
  onAdd?: () => void;
}

const PoseCard: React.FC<PoseCardProps> = ({
  level = 'beginner',
  duration = '30s',
  imageUrl,
  title,
  subTitle,
  description,
  tag = 'standing',
  onAdd,
}) => {
  return (
    <div className="bg-stone-100 rounded-xl shadow-md overflow-hidden border border-stone-200 w-full max-w-sm">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover p-5 bg-stone-200"
        />
        <span className="absolute top-3 left-3 bg-stone-400 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
          {level}
        </span>
        <span className="absolute top-3 right-3  bg-stone-400 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>
      <div className="">
        <div className="p-5 pb-3 ">
          <div className=" flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              {subTitle && (
                <span className="block italic text-gray-400 text-sm">
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
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="bg-stone-300 px-4 py-3 rounded-b-xl">
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
