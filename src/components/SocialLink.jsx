export default function SocialLinks({github, slack}) {
  return (
    <div className="img-logo">
      <a href={slack}><img src="../slack.svg" alt="" /></a>
      <a href={github}><img src="../github.svg" alt="" /></a>
      
    </div>
  );
}
