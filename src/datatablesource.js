export const userColumns = [
  {field: 'id', headerName: 'ID', width: 70},
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {

      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: params => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'John Smith',
    img: 'https://media.istockphoto.com/photos/middle-age-man-using-smartphone-with-a-confident-expression-on-smart-picture-id1042800610?k=20&m=1042800610&s=612x612&w=0&h=uA0knya_pF_Zxgk7_3YeEbmhOKB4ZxjVW2gurUxCJv4=',
    status: 'active',
    email: 'John@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Michael Doe',
    img: 'https://media.istockphoto.com/photos/cheerful-senior-man-drinking-coffee-picture-id598922292?k=20&m=598922292&s=612x612&w=0&h=TzyhxyPFuqGqmN6U4tQ5wjI3wRvZn5IAsq7BdZl-21Q=',
    email: 'mike@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Bamidele Ogundipe',
    img: 'https://media.istockphoto.com/photos/photo-of-funny-casual-delighted-nice-black-man-friendly-seeing-good-picture-id1169767124?k=20&m=1169767124&s=612x612&w=0&h=92cI4rW9MJ3LSi4vm9Ef5J3iqhbr0ppUcIihaFfn7YY=',
    email: 'bam@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Damilola Fashola',
    img: 'https://media.istockphoto.com/photos/headshot-of-african-american-male-in-glasses-posing-in-studio-picture-id1201144322?k=20&m=1201144322&s=612x612&w=0&h=5uTt3v9sYhr4COelkSByvu_MUByDnxRVl8QwOB3nmgA=',
    email: 'dami@gmail.com',
    status: 'active',
    age: 28,
  },
  {
    id: 5,
    username: 'Ibeh Obinna',
    img: 'https://media.istockphoto.com/photos/friendly-young-man-wearing-vintage-shirt-portrait-on-yellow-picture-id1211969198?k=20&m=1211969198&s=612x612&w=0&h=-7dE3XLnRr988Fb_CcbPQdV1UkbM0EZthZ0O3ADCCYE=',
    email: 'ibeh@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Simone Kelvin',
    img: 'https://media.istockphoto.com/photos/hispanic-adult-standing-outside-and-smiling-picture-id1147066751?k=20&m=1147066751&s=612x612&w=0&h=cn7QHcfmvRO3oNUeOrYu5XBuqPSGQYwWCyLZLbkrNEo=',
    email: 'simone@gmail.com',
    status: 'active',
    age: 42,
  },
  {
    id: 7,
    username: 'Gladys Madueke',
    img: 'https://media.istockphoto.com/photos/elegant-black-woman-posing-with-coffee-in-her-hands-on-the-city-picture-id1174239017?k=20&m=1174239017&s=612x612&w=0&h=g2LhLvJfBtJ_g4sxMbwhpmY5kUJoth6tcLQ-GeVKbi0=',
    email: 'gla@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Adebola Ruth',
    img: 'https://media.istockphoto.com/photos/happy-african-american-woman-laughing-picture-id482546370?k=20&m=482546370&s=612x612&w=0&h=if6PxTckUtbXPx2CeHkS243PGzbMFjuNnCpiwn8a3SU=',
    email: 'ruth@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Rose Kevwe',
    img: 'https://media.istockphoto.com/photos/beautiful-africanamerican-teenaged-girl-happy-and-smiling-outdoors-picture-id1220173678?k=20&m=1220173678&s=612x612&w=0&h=DyMhh2uofq7GUjNI4a6Y0JnjxqD0Di1677_na45OxN8=',
    email: 'rose@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 10,
    username: 'Amaka Chinaza',
    img: 'https://media.istockphoto.com/photos/portrait-of-beautiful-woman-with-bright-clothing-picture-id1146592739?k=20&m=1146592739&s=612x612&w=0&h=bmHKw2PfD29IAKHO1M_y4xzfnsKaUAF3zmBQ4AXrvZg=',
    email: 'amy@gmail.com',
    status: 'active',
    age: 25,
  },
];
