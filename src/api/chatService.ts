// api/chatService.ts

interface MessageObj {
    message: string;
    timestamp: string;
    role: string;
  }
  
  export const fetchChatData = async (userMessageObj: MessageObj): Promise<string | null> => {
    console.log('test')
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userMessageObj),
      });
  
      console.log('response', response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('data', data)
      return data|| null;
    } catch (error) {
      console.error('Error calling chat API:', error);
      return null;
    }
  };
  