import React from 'react';

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Form = () => {
  const uploadApplication = async e => {
    e.preventDefault()

    const response = await fetch("/api/application", {
      method: "POST",
      body: JSON.stringify({
        input: input,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        resume: resume,
        linkedIn? :linkedIn,
        portfolio? : portfolio,
        additionalLink? : additionalLink,
        createdAt: new Date().toString()
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseData = await response.json()
    console.log(responseData)
  }
  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
    <textarea
      rows="4"
      placeholder="What do you want to talk about?"
      className="bg-transparent focus:outline-none dark:placeholder-white/75"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />

    <input
      type="text"
      placeholder="Add a photo URL (optional)"
      className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
      value={photoUrl}
      onChange={(e) => setPhotoUrl(e.target.value)}
    />

    <button
      className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
      type="submit"
      onClick={uploadPost}
      disabled={!input.trim() && !photoUrl.trim()}
    >
      Post
    </button>
  </form>
  )
}

export default Form
