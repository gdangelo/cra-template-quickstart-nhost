const Avatar = ({ src = '', alt = '' }) => (
  <div className="rounded-full bg-gray-100 overflow-hidden w-9 h-9">
    {src ? <img src={src} alt={alt} /> : null}
  </div>
);

export default Avatar;
