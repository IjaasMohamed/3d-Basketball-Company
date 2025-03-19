import Spline from '@splinetool/react-spline';

export function SplineScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Spline 
        className="w-full h-full"
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
      />
    </div>
  );
}