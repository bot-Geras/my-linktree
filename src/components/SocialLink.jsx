export default function SocialLinks(props) {
  console.log(props)
  return (
    <div className="img-logo">
      <a href={props.slack}><img src="../slack.svg" alt="" /></a>
      <a href={props.github}><img src="../github.svg" alt="" /></a>
      
    </div>
  );
}
