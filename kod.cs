public int Size { get; set; }

        public ArrayList CreateBoard(int Size)
        {
            ArrayList board = new ArrayList();
            
            int i = 0;

            while (i<Size)
            {
                ArrayList row = new ArrayList();
                int counter = 0;

                while (counter<Size)
                {
                    Field myField = new Field();
                    row.Add(myField);
                    counter++;
                }

                board.Add(row);
                i++;
            }

            return board;
        }

        public void DisplayBoard(ArrayList arrayList)
        {
            Console.WriteLine($"Display Board is Not Implemented. Size is equal to {arrayList.Count}");
        }


            int size = Int32.Parse(Console.ReadLine());
            Playground newPlayground = new Playground();
            var board = newPlayground.CreateBoard(size);
            newPlayground.DisplayBoard(board);



foreach (var field in playground.Board)
            {
                if (currentPlayer.Color == Color.Black)
                {
                    if (field.Pawn != null && field.Pawn.Color == Color.White)
                    {
                        
                        return false;
                    }
                }
                else if (currentPlayer.Color == Color.White)
                {
                    if (field.Pawn != null && field.Pawn.Color == Color.Black)
                    {
                        
                        return false;
                    }
                }
                else
                {
                    return true;
                }
               
              
            }