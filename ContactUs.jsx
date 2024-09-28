import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uzj8f3d', 'template_untf2dh', form.current, 'jqgta_PzUzS9tXkga')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            document.getElementById('user_name').value = '';  
            document.getElementById('user_email').value = '';  
            document.getElementById('message').value = '';  
          };

    return (
        <form ref={form} onSubmit={sendEmail} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="user_name">
                    Name
                </label>
                <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_name" type="text" name="user_name" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="user_email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="message">
                    Message
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message"></textarea>
            </div>
            <div class="flex items-center justify-between">
                <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" />
            </div>
        </form>

    );
};