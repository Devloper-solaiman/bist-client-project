import { Parallax } from "react-parallax";

const Cover = ({ img, title,bg }) => {
    return (
       <Parallax
       blur={{ min: -50, max: 50 }}
       bgImage={img}
       bgImageAlt="the menu"
       strength={-200}
       >
          <div className="hero h-[600px]">
                <div className="hero-overlay "></div>
                <div className={`hero-content ${bg} px-24 py-10 text-center text-neutral-content`}>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
       </Parallax>
    );
};

export default Cover;