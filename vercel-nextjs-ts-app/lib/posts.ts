import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'pages')

export type Post = {
    id: number
    title: String
    date: String
}

const dummyPosts: Post[] = [
    {
        id: 1,
        title: 'Hoge',
        date: '2022-02-01',
    },
    {
        id: 2,
        title: 'Fuga',
        date: '2022-02-02',
    },
    {
        id: 3,
        title: 'Piyo',
        date: '2022-02-22',
    },
];

export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {

//     const id = "hoge"
//     const postData = { title: 'fuga', date: '2022-01-01' }

//     return {
//       id,
//       ...(postData as { date: string; title: string })
//     }
//   })
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
  return dummyPosts;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

