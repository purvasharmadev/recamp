import React,{useState,useEffect} from 'react';
import { storage } from "../../firebase-config";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import { db } from "../../firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";


function Resources() {

    //Link collection ref
    const LinkRef = collection(db, "Link");
    const [ link,setLink]= useState([])
    const [linkInput,setLinkInput ] = useState();
    const [linkName,setLinkName] = useState()


  const [file,setFile] = useState(null)
  const [fileList,setFileList] = useState([])
  const [url,setUrl] = useState([])

  const fileListRef = ref(storage,"docs/")
  const uploadFile = ()=>{
    if(file == null) return;
    const fileRef = ref(storage,`docs/${file.name + v4()} `);
    uploadBytes(fileRef,file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setUrl((prev)=>[...prev,url])
      })
    })

  }

    //  get List Of task
    async function getLink() {
      await getDocs(LinkRef);
      onSnapshot(LinkRef, (res) => {
        setLink(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    }

      // Create new Task
  async function createLink() {
    if (linkInput !== undefined) {
      const add = await addDoc(LinkRef, {
        name:linkName,
        link:linkInput,
      });
      setLinkInput("");
      return add;
    } else {
      console.log("please add details");
    }
  }

  console.log("Link ", link);
  useEffect(() => {
    getLink();
  }, []);

  useEffect(()=>{
    listAll(fileListRef).then((res)=>{
      res.items.forEach((item)=>{
        // console.log("res ", item.fullPath)
        getDownloadURL(item).then((url)=>{
          setFileList((prev) => [...prev,url])
        })
      })
    })
  },[])


  return (
    <div className='w-50'>
      <h1>Resources</h1>
      <h3>Share Images</h3>
      <input onChange={(event)=>setFile(event.target.files[0])} type="file"/>
      <button onClick={uploadFile}>Upload</button>
      <br/>
      <input onChange={(e)=>setLinkName(e.target.value)} placeholder='enter resource name' type="text"/>
      <input onChange={(e)=>setLinkInput(e.target.value)} placeholder='enter resource link' type="text"/>
      <button onClick={createLink}>Add</button>
      {fileList.map((item)=>{
        return(
          <img height="200px" width="200px" src={item} alt="img"/>
        )
      })
      }
      {
        link.map((item)=>{
          return <li><a href={item.link} >{item.name}</a></li>
        })
      }
    </div>
  )
}

export default Resources