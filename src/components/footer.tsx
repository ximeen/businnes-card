export function Footer() {
	return (
		<div className="flex flex-col items-center justify-center my-10">
			<span className="text-sm text-muted-foreground w-1/2 text-center py-6">
				&copy; {new Date().getFullYear()} Oren Refrigeração - Todos os direitos
				reservados!
			</span>
			<span className="text-sm text-muted-foreground w-1/2 text-center pb-6">
				Created by <a href="https://github.com/ximeen" className="hover:text-secondary-foreground">Gabriel Ximenes</a>
			</span>
		</div>
	);
}

