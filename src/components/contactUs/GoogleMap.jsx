const GoogleMap = () => {
  return (
    <div className="map">
      <iframe
        aria-label="location on google map"
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4951.7565509106635!2d-8.585321271785933!3d51.6437542686308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484460bde579cb37%3A0xdbc035cf2db632c2!2sGarretstown%20Beach!5e0!3m2!1sen!2sie!4v1656839133578!5m2!1sen!2sie"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default GoogleMap;
