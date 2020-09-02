
export default (req , res) => {
 

// Pexels API
const PEXELS_API = 'https://api.pexels.com/videos/videos/:id';

export async function getServerSideProps() {
  const res = await fetch(`${PEXELS_API}?part=snippet&maxResults=20&playlistId=PLEFeVUxfZMzG6S5IbN-GuJKd3841EaqkM&key=${process.env.PEXELS_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}






    if (!req.body) {
      res.statusCode = 404
      res.end('Error')
      return
  
    }



