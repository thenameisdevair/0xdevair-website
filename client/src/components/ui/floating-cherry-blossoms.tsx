export function FloatingCherryBlossoms() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div 
        className="cherry-blossom animate-float" 
        style={{
          top: '10%', 
          left: '85%', 
          animationDelay: '0s'
        }}
      />
      <div 
        className="cherry-blossom animate-float" 
        style={{
          top: '25%', 
          right: '90%', 
          animationDelay: '2s'
        }}
      />
      <div 
        className="cherry-blossom animate-float" 
        style={{
          top: '45%', 
          left: '5%', 
          animationDelay: '4s'
        }}
      />
      <div 
        className="cherry-blossom animate-float" 
        style={{
          top: '70%', 
          right: '10%', 
          animationDelay: '1s'
        }}
      />
      <div 
        className="cherry-blossom animate-float" 
        style={{
          top: '85%', 
          left: '15%', 
          animationDelay: '3s'
        }}
      />
    </div>
  );
}
