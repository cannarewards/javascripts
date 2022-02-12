if (typeof window.ethereum !== 'undefined')
{
console.log('MetaMask is installed')
}

const tokenAddress = '0xef50c139be0b67baab4f834d3d9a1f09d2691e02'; // replace with your own crypto address
const tokenSymbol = 'SGC'; // replace with your own crypto symbol
const tokenDecimals = 18; // put number of deciimals
const tokenImage = 'https://i.imgur.com/o2EXAlM.png'; // add link to a token image

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
    console.log('Currency Added Successfuly');
  } else {
    console.log('The currency has not been added');
  }
} catch (error) {
  console.log(error);
}
}