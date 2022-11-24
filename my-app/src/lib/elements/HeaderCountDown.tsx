

const HeaderCountDown = ({props}:any) => {
  const episodes = props[0]
  const source = props[1]
  const startDate = new Date(props[2])
  const dateNow = new Date()

  //episodes on going
  const differnces = dateNow.getTime() - startDate.getTime()
  const totalDays = Math.ceil(differnces / (1000*3600*24))
  const totalEpisode = Math.ceil(totalDays/7+1)

  // const day = 

  //countdays
  // const day = 

  return (
    <div>
      <div>Ep {totalEpisode} {episodes > 0 ? ` of ${episodes} ` : ' ' } airing in</div>
      <div></div>
    </div>
  )
}

export default HeaderCountDown