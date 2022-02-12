if (typeof window.ethereum !== 'undefined')
{
console.log('MetaMask is installed')
}

const tokenAddress = '0x577a296d576D1E58C762408faaC2F10B5FC9d9b5'; // Crypto address for cannarewards
const tokenSymbol = 'CAN'; // Cannarewards Symbol
const tokenDecimals = 18; // Decimal
const tokenImage = 'https://static.wixstatic.com/media/74673c_8f2820d7be374610a9b82aaa451bea6d~mv2.png'; // add link to a token image

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Cannarewards Added Successfuly');
  } else {
    console.log('Cannarewards has not been added');
  }
} catch (error) {
  console.log(error);
}
}
